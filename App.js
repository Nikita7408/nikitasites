import React, { useEffect, useRef, useState } from "react";
import "./App.css";

const sites = [
  { name: "Canada Earthquake Tracker", url: "https://nxfqk6.csb.app/" },

  { name: "WORDLE", url: "https://6sjxdy.csb.app/" },

  {
    name: "Nikita Photography main page",
    url: "https://www.youtube.com/@NikitaLevchenko-nl",
  },

  {
    name: "Maps by Nikita",
    url: "https://whjm32.csb.app/",
  },
  {
    name: "Pixel's a photo marketplace made by me and a slay person",
    url: "https://pixels.pixelspictures.workers.dev/",
  },

  {
    name: "Kobogames! made by a very slay person",
    url: "https://kobogames.neocities.org/",
  },

  {
    name: "MINECRAFT!!! (free, multiplayer, unblocked!!!)",
    url: "https://nikita7408.github.io/minecraft/",
  },
  {
    name: "Scriptinator- A website that helps you add sound effect to scripts (scripts as in acting scripts). (Includes automatic playing)",
    url: "https://nikita7408.github.io/scriptinator/",
  },
  

  {
    name: "Fish Game (in development please email me suggustions)",
    url: "https://nikita7408.github.io/fishhunt3d/",
  },
  { name: "WORDLE EXTRA", url: "https://9klqfc.csb.app/" },

  {
    name: "ADVANCED ANNOYING SITE!(not made by me)",
    url: "https://pikarocks.dev/fun/annoying/",
  },

  {
    name: "ADVANCED ANNOYING SITE #2!(not made by me)",
    url: "https://theannoyingsite.com/",
  },
];

export default function App() {
  const videoRef = useRef(null);
  const [showPrompt, setShowPrompt] = useState(true);

  const handleEnableSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current
        .play()
        .then(() => {
          setShowPrompt(false);
        })
        .catch((err) => {
          console.warn("Playback error:", err);
        });
    }
  };

  useEffect(() => {
    // Try to autoplay muted (allowed by browser)
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {
        console.warn("Muted autoplay blocked");
      });
    }
  }, []);

  return (
    <>
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        playsInline
        className="background-video"
        src="https://files.catbox.moe/wdzr5d.mp4"
        type="video/mp4"
      />

      {/* Sound Prompt */}
      {showPrompt && (
        <div className="popup">
          <div className="popup-content">
            <p>
              Please turn on sound and press OK,{" "}
              <strong>Slay! Sincerely by NIKITA (Note: If you are on this website without permission you better turn your volume down...)</strong>
            </p>
            <button onClick={handleEnableSound}>OK</button>
          </div>
        </div>
      )}

      {/* Main Dashboard */}
      <div className="dashboard">
        <h1 className="title">
          Nikita Sites, websites by Nikita Levchenko. Originally made in 2024
        </h1>
        <p className="subtitle">
          Hello ladies and gentelemen I welcome you to my site! Today I am very
          fortunate to partner with a very slay person the creator of
          kobogames.neocities as they have offered to advertize my youtube
          channel for free. If you have any drone photography or any other type
          of photography or 3d house models or phone repair service requests
          please feel free to email me at nlevchenko12345@gmail.com Thank you
          for visiting and please have a great day! Sincerely, Nikita
        </p>
        <div className="site-grid">
          {sites.map((site, index) => {
            const isAdvancedAnnoying =
              site.url === "https://pikarocks.dev/fun/annoying/" ||
              site.url === "https://theannoyingsite.com/";

            return (
              <a
                key={index}
                href={site.url}
                className="site-card"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  if (isAdvancedAnnoying) {
                    console.warn(
                      "Attempting to visit an advanced annoying site:",
                      site.url
                    );
                    const proceed = window.confirm(
                      "Warning: This site is very annoying. Continue?"
                    );
                    if (!proceed) {
                      e.preventDefault(); // stop redirect
                      console.log("User canceled redirect to:", site.url);
                      alert("Redirect canceled! You stayed on this dashboard.");
                    } else {
                      console.log("User continued to:", site.url);
                      alert("Redirecting to the site now!");
                    }
                  }
                }}
              >
                <h2>{site.name}</h2>
                <p>{site.url}</p>
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
}
