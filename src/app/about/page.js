import Background from "@/components/Background"; // Import the new component
import Navbar from "@/components/Navbar";

export default function AboutPage() {
    return (
      <div>
        <Navbar/>
        <Background /> {/* Add the animated background */}
        <h1>About Page Dylan</h1>
        <p>Welcome to the About page!</p>
      </div>
    );
  }