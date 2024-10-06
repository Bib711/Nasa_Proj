    import express from 'express';
    import dotenv from 'dotenv';
    import cors from 'cors';

    dotenv.config();

    const app = express();
    app.use(cors());
    app.use(express.json());

    const port = 3020;

    // General randomizer function to get a random element from an array
    function randamoizer(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
    }

    app.get("/missilesAndStrategical", (req, res) => {
        const depthOfKnowledge = [
        "1. In terms of propulsion efficiency, how does specific impulse (Isp) vary between solid, liquid, and hybrid propulsion systems? Can you explain how this impacts the design choices for different missile systems?",
        "2. Explain how Mach number affects the design and performance of missile propulsion systems in supersonic and hypersonic regimes. What specific changes must be made to propulsion systems at these speeds?",
        "3. Describe how chemical rocket propulsion efficiency is influenced by nozzle design. How do variables like expansion ratio, pressure, and temperature affect the exhaust velocity?",
        "4. Can you explain the role of turbulence modeling in CFD for missile aerodynamics? What are the advantages and limitations of popular models like RANS, LES, or DNS?"
        ];
    
        const practicalApplication = [
        "1. You are tasked with designing a missile system for long-range precision strikes. How would you optimize the propulsion system for both efficiency and accuracy in targeting? What real-world factors would you need to consider?",
        "2. Considering heat management is crucial in high-speed missile systems, how would you design a thermal protection system to ensure the structural integrity of the missile at Mach 5?",
        "3. If you were part of a team designing a hybrid propulsion system for a reusable missile, how would you test and validate the system's performance?",
        "4. In the context of CFD simulations for missile aerodynamics, how would you validate your simulation results experimentally, and what real-world challenges might arise?"
        ];
    const interdisciplinaryKnowledge = [
        "1. Missile propulsion systems interact with avionics and guidance systems. How would you ensure that propulsion, aerodynamics, and control systems work harmoniously in a missile design?",
        "2. In developing a propulsion system, how would material science influence your design decisions regarding weight, heat resistance, and structural strength?",
        "3. Discuss how electrical systems, such as sensors or actuators, could be integrated into a propulsion system to enhance performance. What challenges would arise from this integration?",
        "4. In what ways can advancements in fuel chemistry (e.g., high-energy propellants) improve missile propulsion? How would you balance fuel selection with material and structural considerations?"
        ];
        const innovation = [
        "1. With emerging technologies like electric propulsion or air-breathing engines, how would you apply these innovations to improve future missile systems' performance?",
        "2. Imagine you are tasked with improving the missile's stealth capabilities. How would you modify the propulsion and aerodynamic design to minimize its radar signature?",
        "3. Given the increasing focus on reusable aerospace technologies, how would you design a reusable missile propulsion system? What unique challenges would you face?",
        "4. If you had to develop a hybrid propulsion system combining rocket and air-breathing engines, how would you approach the design? What specific challenges and benefits do you foresee?"
        ];
    
        const problemSolving = [
        "1. You are working on a high-altitude missile that encounters air density variations, affecting performance. How would you modify the propulsion system to adapt to varying atmospheric conditions?",
        "2. Imagine that due to new regulatory standards, you need to reduce the environmental impact of missile propulsion. How would you redesign the propulsion system to meet these standards without compromising performance?",
        "3. If a CFD simulation of a missile shows unexpected aerodynamic drag, how would you troubleshoot the issue? What steps would you take to improve the accuracy of the simulation?",
        "4. During a missile test flight, you notice that the propulsion system is overheating, causing structural damage. How would you diagnose the problem, and what corrective measures would you take?"
        ];
    
        
    
        res.json({
        question1: {
            answer:randamoizer(depthOfKnowledge),},
        question2: randamoizer(practicalApplication),
        question3: randamoizer(interdisciplinaryKnowledge),
        question4: randamoizer(innovation),
        question5: randamoizer(problemSolving)
        });
    });

    app.listen(port,()=>{
        console.log("running on port 3020");
        
    })
    