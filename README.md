
# 🏆 Coach Profile Website

A responsive website showcasing a coach's profile, top athletes trained, and their achievements. This project includes a structured navigation bar, athlete statistics, and interactive features like an image slider.

## 📂 Project Structure

📁 Project Root
│── 📄 hom.html # Home Page
│── 📄 about.html # About Page
│── 📄 contact.html # Contact Page
│── 📄 sign-in.html # Sign-In Page
│── 📁 Images/ # Image Assets
│── 📄 styles.css # Stylesheet
│── 📄 script.js # JavaScript Functions
│── 📄 README.md # Project Documentation



## 🚀 Features

✅ **Navigation Bar** – Provides easy access to all pages  
✅ **Athlete Grid** – Displays top athletes with images and details  
✅ **Statistics Table** – Lists achievements and experience of athletes  
✅ **Image Slider** – Cycles through images dynamically  
✅ **Responsive Design** – Ensures a smooth experience on all devices  

## 📌 Setup Instructions

1️⃣ **Download or Clone the Repository**  
```sh
git clone https://github.com/urushadev/Frontend.git
cd your-project-folder
2️⃣ Open the Project in a Browser

Open index.html in any web browser.
3️⃣ Check for Required Files
Ensure that:

styles.css is correctly linked in all pages.
script.js is included with defer in <head>.

🛠 Troubleshooting
Navbar Not Clickable?
Make sure <header> and <nav> structures are the same across all pages.
Check if styles.css is properly linked.
Use Developer Tools (F12 → Console) and run:
document.querySelectorAll('nav a').forEach(link => console.log(link.href));
If it prints incorrect links, check the HTML structure.
Images Not Loading?
Ensure image paths in img tags are correct.
Store all images inside the /Images folder.
JavaScript Not Working?
Ensure script.js is properly linked in the <head> with defer.
Open the browser console (F12 → Console) and check for errors.

💡 Future Improvements
🔹 Add animations for smooth transitions
🔹 Implement a database for athlete profiles
🔹 Improve mobile responsiveness