
<h1>🎯 Chill Gamer Server</h1>

<p><strong>A game review platform</strong> built with the <strong>MERN stack</strong>, allowing users to browse, review, and manage game reviews. The backend is powered by <strong>Node.js, Express.js, and MongoDB</strong>, with secure authentication via <strong>Firebase</strong> and API protection using <strong>JWT</strong>.</p>

<h2>🚀 Technologies Used</h2>
<p>
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white">
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white">
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white">
  <img src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black">
  <img src="https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white">
</p>
<hr>

<h2>✨ Core Features</h2>
<ul>
  <li>✅ <strong>Game Reviews</strong>: Users can browse, add, update, and delete reviews.</li>
  <li>✅ <strong>Authentication</strong>: Firebase handles secure login and registration.</li>
  <li>✅ <strong>User Dashboard</strong>:
    <ul>
      <li>Users can manage their submitted reviews.</li>
      <li>Users can add games to their watchlist.</li>
    </ul>
  </li>
  <li>✅ <strong>Dark/Light Mode</strong>: Toggle between themes for a better user experience.</li>
  <li>✅ <strong>JWT Security</strong>: Secure API authentication with JSON Web Token (JWT).</li>
</ul>
<hr>

<h2>📦 Dependencies</h2>
<ul>
  <li><strong>Frontend:</strong>
    <ul>
      <li>react (^18.3.1)</li>
      <li>react-router-dom (^6.28.1)</li>
      <li>react-icons (^5.4.0)</li>
      <li>sweetalert2 (^11.15.10)</li>
      <li>axios (^1.7.9)</li>
    </ul>
  </li>
  <li><strong>Backend:</strong>
    <ul>
      <li>express (^4.21.2)</li>
      <li>mongodb (^6.12.0)</li>
      <li>cors (^2.8.5)</li>
      <li>dotenv (^16.4.7)</li>
    </ul>
  </li>
</ul>
<p><em>(Full dependencies list available in <code>package.json</code>.)</em></p>
<hr>

<h2>🛠️ Installation & Running Locally</h2>
<p>Follow these steps to set up <strong>Chill Gamer</strong> on your local machine:</p>

<h3>1️⃣ Clone the Repository</h3>
<pre><code>git clone https://github.com/ashis263/chill-gamer-server-side.git
cd chill-gamer-server-side</code></pre>

<h3>2️⃣ Install Dependencies</h3>
<pre><code>npm install</code></pre>

<h3>3️⃣ Set Up Environment Variables</h3>
<p>Create a <code>.env</code> file and add the following:</p>
<pre><code>PORT=5000
MONGO_URI=YOUR_MONGODB_CONNECTION_STRING
JWT_SECRET=YOUR_SECRET_KEY</code></pre>
<p><em>(Replace with your actual credentials.)</em></p>

<h3>4️⃣ Start the Development Server</h3>
<pre><code>npm start</code></pre>
<p>The backend will run at <code>http://localhost:5000/</code> by default.</p>
<hr>

<h2>🌐 Live Demo</h2>
<ul>
  <li>🚀 <a href="https://chill-gamer-7df90.web.app/">Firebase Deployment</a></li>
  <li>🚀 <a href="https://chill-gamer-ashis263.netlify.app/">Netlify Deployment</a></li>
  <li>🚀 <a href="https://chill-gamer-ashis263.surge.sh/">Surge Deployment</a></li>
</ul>
<hr>

<h2>🤝 Contribution</h2>
<p>Feel free to fork the repository and submit a pull request. For major changes, please open an issue first to discuss what you’d like to improve.</p>
