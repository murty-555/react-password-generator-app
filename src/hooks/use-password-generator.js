import { useState } from "react"

const usePasswordGenerator = () => {
    const[password, setPassword] = useState("");
    const [error, setError] = useState("");
    
    const generatePassword = (checkboxData,length) => {
        let charset = "", generatedPassword = "";

        const selectedOption = checkboxData.filter(checkbox => checkbox.state)

        if(selectedOption.length === 0){
            setError("Select atleast one option")
            setPassword("")
            return;
        }

        selectedOption.forEach(option => {
            switch(option.title){
                case "Include Uppercase Letters":
                    charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                    break;
                case "Include Lowercase Letters":
                    charset += "abcdefghijklmnopqrstuvwxyz";
                    break;
                case "Include Numbers":
                    charset += "0123456789";
                    break;
                case "Include Symbols":
                    charset += "!@#$%^&*()";
                    break;
                default:
                    break;
            }
        })

        for(let i=0; i<length; i++){
            const randomIndex= Math.floor(Math.random() * charset.length)
            generatedPassword += charset[randomIndex]
        }

        setPassword(generatedPassword);
        setError("")

    }
    return {password, error, generatePassword}
}

export default usePasswordGenerator;