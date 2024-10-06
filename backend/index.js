import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const port = 3000;

// General randomizer function to get a random element from an array
function randomizer(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

// Life Sciences Questions Endpoint
app.get('/lifesciences', (req, res) => {
  const depthOfKnowledge = [
    "Explain the concept of epigenetics and its impact on gene expression. How do modifications such as DNA methylation and histone acetylation affect cellular processes?",
    "Discuss the differences between prokaryotic and eukaryotic gene regulation. How do these differences affect experimental approaches in molecular biology?",
    "Describe the process and significance of RNA interference (RNAi). How does RNAi contribute to gene silencing, and what are its potential applications in research and therapy?",
    "What are the primary differences between cellular respiration and fermentation? In what scenarios would a cell preferentially use one process over the other?"
  ];

  const practicalApplication = [
    "Design an experiment to investigate the effect of a novel antibiotic on bacterial growth. Include details on the experimental setup, controls, and methods of analysis.",
    "How would you approach optimizing a protein purification protocol for a protein of interest expressed in E. coli? What factors would you consider to enhance yield and purity?",
    "Explain the process of generating a knockout mouse model. What are the key steps involved, and how would you confirm the successful knockout of the target gene?",
    "Discuss the steps you would take to develop a new assay for measuring enzyme activity in a biological sample. What considerations would you need to address to ensure accuracy and reliability?"
  ];

  const interdisciplinaryKnowledge = [
    "How can knowledge from microbiology and biochemistry be integrated to enhance the development of biosensors for detecting environmental contaminants?",
    "Propose a research project that uses molecular biology, microbiology, and biochemistry to study microbial metabolic pathways. How would you integrate these disciplines to achieve your research goals?",
    "Discuss how advancements in molecular biology techniques could be used to address challenges in understanding microbial communities in environmental samples. How would you apply this knowledge in your research?",
    "Explain how biochemistry and molecular biology can be combined to study protein-protein interactions in a cell. What methods would you use, and what insights might you gain from this integrated approach?"
  ];

  const innovation = [
    "Propose a novel method for improving the efficiency of gene delivery in mammalian cells. Consider current limitations and suggest innovative solutions.",
    "Design a new experimental approach to screen for small molecules that modulate protein function. What innovative techniques would you use, and how would you validate the findings?",
    "Describe a novel approach to engineer bacteria for enhanced bioremediation of toxic waste. How would you incorporate genetic modifications and metabolic engineering in your strategy?",
    "Suggest an innovative method to study the dynamic interactions between different signaling pathways in a cell. How would you implement this method, and what insights could it provide?"
  ];

  const problemSolving = [
    "You encounter unexpected results in a proteomics experiment where protein identification is lower than anticipated. How would you troubleshoot and resolve this issue?",
    "In a microbiological experiment, you find that your microbial culture does not grow as expected under the given conditions. What steps would you take to diagnose and address this problem?",
    "Describe a situation where you had to modify an experimental protocol based on preliminary data. How did you identify the need for changes, and what modifications did you implement?",
    "You are working on a biochemical assay and notice that the background noise is significantly higher than expected. How would you address this issue to improve the assay’s accuracy?"
  ];

  // Responding with a structured object containing randomized questions
  res.json({
    question1: randomizer(depthOfKnowledge),
    question2: randomizer(practicalApplication),
    question3: randomizer(interdisciplinaryKnowledge),
    question4: randomizer(innovation),
    question5: randomizer(problemSolving)
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
