# UMAmanager  
User Memory and Alignment LLM Tool  

"A system for storing, retrieving, and applying user memory and alignment preferences for AI interactions."  

## Purpose  
UMAmanager provides **persistent memory** and **alignment controls** for AI interactions, ensuring:  
- **Consistency across AI sessions**  
- **Customizable memory injections when switching between AI models**  
- **Alignment settings that define AI personality and behavior**  

## Functionality  

### 🧠 **Memory Controls**  
- When uploading chats to UMA, users can **select from 5 core topics** to determine what chat summaries and full conversations are retrived in UMAinject file creation:  
  - **Work** (Career, tasks, responsibilities)  
  - **Hobbies** (Interests, skills, personal projects)  
  - **Projects** (Ongoing & past projects, goals, workflows)  
  - **Personal** (Life details, relationships, preferences)  
  - **Other** (General or uncategorized info)  

- When switching between models, UMA dynamically generates a **custom Inject UMA file** tailored to that LLM.  
- This ensures the **right context is carried over when changing AI models**, preventing loss of continuity.  

### 🎭 **Alignment Controls**  
UMA uses **Traits & Moods** to customize AI behavior:  
- **Traits** = Consistency  
  - These are **fixed personality rules** (e.g., always formal, never swears, loves sci-fi).  
  - Traits remain **constant across all interactions.**  
- **Moods** = Variability  
  - Moods introduce **temporary personality shifts** (e.g., more playful, sarcastic, or focused).  
  - Example moods:  
    - 🎭 "Casual & relaxed" (Uses more emojis, informal speech)  
    - 🔍 "Serious & professional" (Strict tone, no small talk)  
    - 🤖 "Tech-focused" (Prefers deep discussions on tech topics)  
  - Moods allow AI responses to **adapt without losing core personality traits.**  

### ⚙️ **On-Demand File Generation**  
- UMA **does not store static Inject UMA files**.  
- Instead, it **dynamically generates Inject UMA files on demand** based on the user’s selected topics, traits, and moods.  
- This ensures that **each AI session is configured correctly for the specific LLM being used.**  

## 🤖 RobotFriend Integration  
- **RobotFriend** is a future project that will function as a **personalized AI assistant** with real-time access to UMAmanager.  
- RobotFriend will be able to:  
  - **Upload new chats to UMA**  
  - **Search & browse memory logs**  
  - **Retrieve past AI interactions & Inject UMA files**  
  - **Calculate & optimize Inject UMA file sizes**  
  - **Automate configuration of different LLMs using UMA data**  

## 📜 PML (Project Management Log) Integration  
- **PML is a separate tool** that helps **prevent lost context in development projects**.  
- PML ensures that AI does **not accidentally erase important work due to lost memory or context gaps.**  
- When importing a chat into UMA, users will have the option to:  
  - **Manually insert a chat log**  
  - **Assign it to one of the 5 core topics**  
  - **Attach relevant PML logs** (preventing context loss in AI-assisted coding projects)  
- This allows **UMAmanager to retain structured project history**, making AI more reliable when assisting with long-term work.  

## 📜 License  
UMA is licensed under the **Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)**.  

This means:  
- ✅ Free to use for **personal/non-commercial** purposes.  
- 🚫 **Cannot be used for commercial purposes** without permission.  
- 🔗 **Any public use must provide attribution.**  

For commercial inquiries, contact 📧 **brett.watson@mac.com**  
