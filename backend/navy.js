import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const port = 3030;

// General randomizer function to get a random element from an array
function randamoizer(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}


app.get("/navalSystem", (req, res) => {
    const depthOfKnowledge = [
      "1. Naval vessels operate under a variety of conditions, ranging from calm seas to rough, turbulent waters. How would you design a hull that maximizes hydrodynamic efficiency while maintaining structural integrity in harsh marine environments? Discuss the materials you would choose and the design trade-offs between speed, stability, and durability.",
      "2. Marine vessels face constant exposure to corrosive environments, leading to structural degradation. How would you incorporate corrosion management techniques into the design and material selection process for a naval ship? Discuss different approaches and their effectiveness, especially in minimizing long-term maintenance costs.",
      "3. Stability is a critical factor in naval vessel design, especially for ships operating in varied sea conditions. How would you design a naval vessel to optimize both stability and buoyancy? Discuss the influence of hull shape, ballast, and material selection on the vessel's stability.",
      "4. Modern naval vessels often require advanced hydrodynamic modeling to optimize their performance. How would you develop and validate a hydrodynamic model for a new class of naval vessel? Discuss the integration of computational fluid dynamics (CFD), physical testing, and real-world data in your approach."
    ];
  
    const practicalApplication = [
      "1. Considering that naval vessels are exposed to harsh marine environments, how would you incorporate advanced corrosion prevention techniques into the design of a new naval vessel? Discuss specific materials, coatings, and design modifications that would enhance the vessel's lifespan and performance. How would you approach the implementation of these techniques in a cost-effective manner?",
      "2. Composite materials offer advantages such as reduced weight and improved corrosion resistance. However, their implementation in shipbuilding can present challenges. How would you address these challenges when incorporating composites into the design of a naval vessel? Discuss specific issues related to manufacturing, repair, and performance under marine conditions.",
      "3. Ocean engineering projects often have significant environmental impacts. How would you design a marine engineering project (e.g., a coastal defense system or marine energy installation) to minimize its environmental footprint? Discuss the interdisciplinary approaches you would use to address environmental concerns while achieving project goals.",
      "4. Coastal protection systems are crucial for mitigating the effects of erosion and flooding. How would you design a sustainable coastal protection system that integrates principles from ocean engineering, materials science, and environmental science? Discuss the design process, material choices, and environmental considerations."
    ];
  
    const interdisciplinaryKnowledge = [
      "1. With the increasing focus on sustainability, how would you design a marine energy system (e.g., wave energy converter, tidal turbine) that integrates principles from ocean engineering, materials science, and environmental science? Discuss how you would address energy efficiency, material durability, and environmental impact.",
      "2. Submersible vehicles operating at great depths face unique challenges such as extreme pressures and low temperatures. How would you design a submersible to withstand these conditions? Discuss the role of materials, structural design, and pressure-resistant technologies in ensuring the vehicle's performance and safety.",
      "3. Designing offshore platforms requires balancing structural integrity with environmental conditions such as waves, wind, and corrosion. How would you approach the design of an offshore platform to ensure stability and durability? Discuss the selection of materials, structural reinforcements, and design features to address these challenges.",
      "4. Marine equipment, such as turbines or pumps, undergoes significant wear and tear due to harsh conditions. How would you address lifecycle management to optimize the performance and longevity of this equipment? Discuss the role of materials science, maintenance strategies, and technological innovations."
    ];
  
    const innovation = [
      "1. Autonomous underwater vehicles (AUVs) require materials that can withstand extreme pressure and corrosive environments while remaining lightweight and durable. How would you innovate new materials or material combinations to enhance the performance and reliability of AUVs? Consider aspects such as pressure resistance, corrosion resistance, and energy efficiency.",
      "2. Corrosion in marine infrastructure poses significant challenges. Propose an innovative solution or technology to prevent or mitigate corrosion in structures such as bridges or offshore platforms. Discuss how your solution integrates advancements in materials science, corrosion engineering, and structural design.",
      "3. With the increasing focus on sustainability in naval systems, how would you incorporate environmentally friendly materials and design principles into a new naval project? Discuss the impact of your choices on the vessel's performance, lifespan, and environmental footprint, especially considering your background in materials science.",
      "4. Modern naval vessels often require advanced hydrodynamic modeling to optimize their performance. How would you develop and validate a hydrodynamic model for a new class of naval vessel? Discuss the integration of computational fluid dynamics (CFD), physical testing, and real-world data in your approach."
    ];
  
    const Problemsolving = [
      "1. Imagine you are tasked with investigating a case where a newly designed marine vessel experienced unexpected structural failure during its maiden voyage. How would you approach diagnosing the cause of the failure, and what steps would you take to rectify the issue and prevent future occurrences? Discuss your approach considering aspects of naval architecture, materials science, and potential engineering faults.",
      "2. Marine pollution, such as oil spills or plastic waste, poses significant environmental challenges. If tasked with developing a new technology or system to control or mitigate marine pollution, what would your approach be? Discuss the design, materials, and practical implementation of your proposed solution.",
      "3. A floating platform used for deep-sea drilling is experiencing stability issues due to dynamic wave forces. You are tasked with improving its stability and operational safety. How would you approach the problem, considering structural modifications, material advancements, and hydrodynamic analysis?",
      "4. Marine infrastructure such as piers and bridges is often exposed to harsh environmental conditions, leading to rapid corrosion. If you were to design a new corrosion-resistant coating system, what factors would you consider in its development, and how would you test its effectiveness? Discuss the materials, application methods, and long-term performance monitoring."
    ];
  
    res.json({
      question1: randamoizer(depthOfKnowledge),
      question2: randamoizer(practicalApplication),
      question3: randamoizer(interdisciplinaryKnowledge),
      question4: randamoizer(innovation),
      question5: randamoizer(Problemsolving)
    });
  });
  
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
  