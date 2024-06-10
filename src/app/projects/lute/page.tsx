export default function Lute () {
    return (
        <>
        {/* link back to all projects page */}
            <a href="/projects">← Back to projects</a>

            <h1>Lute</h1>
            {/* <p>Description of project here</p> */}
            <h2>Links</h2>
            <ul>
                <li>
                    <a href="https://github.com/eibhlinniccolla/lute-react"
                        rel="noopener noreferrer"
                        target="_blank"
                        >Github Repo</a>
                </li>
                <li><a 
                href="https://github.com/users/eibhlinniccolla/projects/3" 
                rel="noopener noreferrer" 
                target="_blank"
            >Project Board</a></li>
            </ul>
            <h2>Technologies used:</h2>
            <ul>
                <li>React</li>
                <li>TypeScript</li>
                <li>Vite</li>
                <li>Figma</li>
                <li>Python</li>
                <li>Flask</li>
            </ul>

            <h2>Project background</h2>
            <p>Lute is the passion project of a fantastic developer and human named <a href="https://github.com/jzohrab" rel="noopener noreferrer" target="_blank">JZ</a>, who was a frequent user of a previous application called <a href="https://learning-with-texts.sourceforge.io/" rel="noopener noreferrer" target="_blank">LWT (Learning With Texts)</a>. While an incredibly innovative and useful application in its own right, JZ decided that it didn't quite meet his needs and he started working on what would become Lute in his spare time.</p>
            <p>I first stumbled upon Lute after watching a YouTube video by a channel called <a href="https://www.youtube.com/watch?v=HxfqzdhuCoI" rel="noopener noreferrer" target="_blank">Refold</a> which dubbed it "the best free reading tool for language learners". After checking out their tutorial and trying Lute out for myself, I realized they were right. I immediately joined the Lute Discord channel and messaged JZ, telling him how much I loved his app and saying that if he ever needed a hand, I'd love to help out in any way I could.</p>
            <p>Luckily for me, JZ was more than happy to enlist me to contribute, and agreed with my suggestion that Lute could use a more robust and frontend-developer-friendly UI, and I started working on a React frontend.</p>

            <h2>Project roadmap:</h2>
            
            <p>Since Lute already has a functional front end, the first thing I need to do is to achieve feature parity with Lute as it exists. Rather than trying to re-invent the wheel, my current work consists primarily of re-writing the existing functionality and design in react, while adding unit and integration testing using Jest.</p>

            <h2>Design:</h2>
            <p></p>
        </>
    );
}