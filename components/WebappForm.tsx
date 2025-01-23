"use client"

import { useState } from "react"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import MDEditor from "@uiw/react-md-editor"

const WebappForm = () => {
    const[errors, setErrors] = useState<Record<string, string>>({})
    const[pitch, setPitch] = useState("Hello!");

    return (
        <form action={() =>{}} className="webapp_form">
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

        </form>
    )
}

export default WebappForm