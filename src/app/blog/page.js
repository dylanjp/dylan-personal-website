import Background from "@/components/Background"; // Import the new component
import Navbar from "@/components/Navbar";

export default function BlogPage() {
    return (
      <div>
        <Navbar/>
        <Background /> {/* Add the animated background */}
        <h1>Blog Page Dylan</h1>
        <p>Welcome to the Blog page!</p>
      </div>
    );
  }