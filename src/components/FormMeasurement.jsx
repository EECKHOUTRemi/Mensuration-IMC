import { useState } from "react"

export default function FormMeasurements(){
    const [waistline, setWaistline] = useState(0);
    const [chest, setChest] = useState(0);
    const [belly, setBelly] = useState(0);
    const [hip, setHip] = useState(0);
    const [thigh, setThigh] = useState(0);
    
    return (
        <>
        <div className="container">
            
                
                <div className="measurements">
                    <h2>Vos mensurations (cm) :</h2>

                    <div className="inputAndForm">
                        <label>Tour de taille</label>
                        <input 
                            type="number" 
                            name="Waistline" 
                            value={ waistline } 
                            onChange={(event) => setWaistline(event.target.value)} 
                        />
                    </div>
                    
                    <div className="inputAndForm">
                        <label>Tour de poitrine</label>
                        <input 
                            type="number" 
                            name="Chest" 
                            value={ chest } 
                            onChange={(event) => setChest(event.target.value)} 
                        />
                    </div>
                    
                    <div className="inputAndForm">
                        <label>Tour de ventre</label>
                        <input 
                            type="number" 
                            name="Belly" 
                            value={ belly } 
                            onChange={(event) => setBelly(event.target.value)} 
                        />
                    </div>
                    
                    <div className="inputAndForm">
                        <label>Tour de hanches</label>
                        <input 
                            type="number" 
                            name="Hip" 
                            value={ hip } 
                            onChange={(event) => setHip(event.target.value)} 
                        />
                    </div>
                    
                    <div className="inputAndForm">
                        <label>Tour de cuisses</label>
                        <input 
                            type="number" 
                            name="Thigh" 
                            value={ thigh } 
                            onChange={(event) => setThigh(event.target.value)} 
                        />
                    </div>
                
                </div>
            
            

        </div>
        </>
    )
}
