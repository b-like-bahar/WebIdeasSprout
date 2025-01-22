"use client"

import { useState } from "react"
import { Input } from "./ui/input"


const WebappForm = () => {
    const[errors, setErrors] = useState<Record<string, string>>({})
    return (
        <form action={() =>{}} className="webapp_form">
            <div>
                <label htmlFor="title" className="webapp_form-label">Title</label>
                <Input id="title" name="title" className="webapp_form-input" placeholder="Website Title" required />
                {errors.title && <p className="webapp_form-error">{errors.title}</p>}
            
            </div>

        </form>
    )
}

export default WebappForm