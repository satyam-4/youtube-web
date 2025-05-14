const COLORS = [
    "#f87171",
    "#facc15",
    "#4ade80", 
    "#60a5fa", 
    "#a78bfa", 
    "#fb923c", 
    "#34d399", 
    "#f472b6", 
  ]

  export const getColorFromName = (name) => {
    let hash = 0
    console.log("name", name)
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash)
    }
    const index = Math.abs(hash) % COLORS.length
    return COLORS[index]
  }