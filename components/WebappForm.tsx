"use client"

import { useActionState, useState } from "react"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import MDEditor from "@uiw/react-md-editor"
import { Button } from "./ui/button"
import { Send } from "lucide-react"
import { formSchema } from "@/lib/validation"
import { z } from "zod"
import { useToast } from "@/hooks/use-toast"
import { useRouter } from "next/navigation"
import { createWebapp } from "@/lib/actions"

const WebappForm = () => {
    const[errors, setErrors] = useState<Record<string, string>>({});
    const[pitch, setPitch] = useState("");
    const { toast } = useToast();
    const router = useRouter();

    const handleFormSubmit = async (prevState: any, formData: FormData) => {
        try {
            const formValues = {
                title: formData.get("title") as string,
                description: formData.get("description") as string,
                category: formData.get("category") as string,
                link: formData.get("link") as string,
                pitch,
            };
            await formSchema.parseAsync(formValues);
            console.log(formValues);

            const result = await createWebapp(prevState, formData, pitch);

            console.log(result)

            if (result.status == "SUCCESS") {
                toast({
                    title: "Success",
                    description: "Your website pitch has been created successfully",
                });
                router.push( `/webapp/${result._id}`)
            }

            return result;

        } catch (error) {
            if (error instanceof z.ZodError) {
                const fieldErrors = error.flatten().fieldErrors;

                setErrors(fieldErrors as unknown as Record<string, string>);

                toast({
                    title: "Error",
                    description: "Please check your inputs and try again",
                    variant: "destructive"
                });

                return { ...prevState, error: "validation failed", status: "Error"}
            };

        } 

        toast({
            title: "Error",
            description: "An unexpected error has occurred",
            variant: "destructive"
        });

        return {
            ...prevState,
            error: "An unexpected error has occurred",
            status: "ERROR"
        };
    };

    const [state,formAction, isSubmitting] = useActionState(handleFormSubmit, {error: "", status: "INITIAL"});


    return (
        <form action={formAction} className="webapp_form">
            <div>
                <label htmlFor="title" className="webapp_form-label">TITLE</label>
                <Input id="title" name="title" className="webapp_form-input" placeholder="Website Title" required />
                {errors.title && <p className="webapp_form-error">{errors.title}</p>}
            </div>

            <div>
                <label htmlFor="description" className="webapp_form-label">DESCRIPTION</label>
                <Textarea id="description" name="description" className="webapp_form-textarea" placeholder="Describe your website idea" required />
                {errors.description && <p className="webapp_form-error">{errors.description}</p>}
            </div>

            <div>
                <label htmlFor="category" className="webapp_form-label">CATEGORY</label>
                <Input id="category" name="category" className="webapp_form-input" placeholder="Choose a category (Game, Travel, Education, E-commerce, portfolio, etc.)" required />
                {errors.category && <p className="webapp_form-error">{errors.category}</p>}
            </div>

            <div>
                <label htmlFor="link" className="webapp_form-label">IMAGE URL</label>
                <Input id="link" name="link" className="webapp_form-input" placeholder="Website Image URL" required />
                {errors.link && <p className="webapp_form-error">{errors.link}</p>}
            </div>

            <div data-color-mode="light">
                <label htmlFor="pitch" className="webapp_form-label">PITCH</label>
                <MDEditor 
                value={pitch} 
                onChange={(value) => setPitch(value as string)}
                id="pitch"
                preview="edit"
                height={300}
                style={{borderEndEndRadius: 20, overflow: "hidden"}}
                textareaProps = {{
                    placeholder: "Briefly describe what your website purpose and what problem it solves"
                }}
                previewOptions={{
                    disallowedElements: ["style"],
                }}
                />
                {errors.pitch && <p className="webapp_form-error">{errors.pitch}</p>}
            </div>
            <Button type="submit" className="webapp_form-btn text-white" disabled={isSubmitting} >
                {isSubmitting ? "Submitting ..." : "Submit Your Website"}
                <Send className="ml-2" />
            </Button>
        </form>
    )
}

export default WebappForm