import React from 'react'

function About() {
  return (
  
    <div className="container my-5">
      <h1 className="mb-4">About Us</h1>
      <p>
        Welcome to <strong>CloudNotes</strong> - your personal space for storing,
        organizing, and accessing notes anywhere, anytime.
      </p>

      <h3 className="mt-4">Our Mission</h3>
      <p>
        To provide a simple, secure, and accessible way to keep all your notes
        in one place — so you can focus on what truly matters:{" "}
        <em>learning and creating</em>.
      </p>

      <h3 className="mt-4">What We Offer</h3>
      <ul>
        <li> Easy Note Management - Create, edit, and delete notes instantly.</li>
        <li> Secure Login - Your data stays yours, protected with strong authentication.</li>
        <li> Access Anywhere - Works on your laptop, tablet, or phone.</li>
      </ul>

      <h3 className="mt-4">Why Choose Us?</h3>
      <p>
        Because your ideas deserve a safe home where they never get lost — and
        where you can find them instantly when you need them.
      </p>
    </div>
 

  )
}

export default About