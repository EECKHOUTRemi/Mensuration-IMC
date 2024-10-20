import { useState } from "react"

function imcIsNull(height, imc){
    if (height === null || height === '' || height === 0){
        return null;
    } else {
        return <p id="imc" >Votre IMC est de { imc }.</p>;
    }
}

export default function FormWeight(){
    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);

    const imc = (weight / height ** 2 * 10000).toFixed(2);
    
    return (
        <>
        <h2>Votre poids et taille :</h2>
            <div className="inputAndForm">
                <label>Votre poids (kg)</label>
                <input 
                    type="number" 
                    name="weight" 
                    value={ weight } 
                    onChange={(event) => setWeight(event.target.value)}
                    className=""
                />
            </div>

            <div className="inputAndForm">
                <label>Votre taille (cm)</label>
                <input 
                    type="number" 
                    name="height" 
                    value={ height } 
                    onChange={(event) => setHeight(event.target.value)}
                />
            { imcIsNull(height, imc) }

            </div>

        </> 
            
    )
}
