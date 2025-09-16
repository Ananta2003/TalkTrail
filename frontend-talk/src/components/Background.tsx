

interface BackgroundProps {
  children: React.ReactNode;
}

export default function Background({children}:BackgroundProps) {
    return (
        <div className="w-full h-screen">
            <div className="absolute inset-0 bg-black dark:bg-gray-950">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `
          linear-gradient(to right, rgba(48, 52, 58, 0.69) 1.5px, transparent 1px),
          linear-gradient(to bottom, rgba(48, 52, 58, 0.69) 1.5px, transparent 1px)
        `,
                        backgroundSize: "100px 100px",
                    }}
                >
                                        <div className="relative z-10">{children}</div>

                    <div className="absolute inset-0">
                        {/* fading mask at bottom */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#111111] dark:to-gray-100" />

                        
                    </div>
                </div>
            </div>
        </div>

    )
}