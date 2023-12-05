export function genId(){
    const id = Math.random().toString(36).slice(-10)+'-'+Math.random().toString(36).slice(-5)+'-'+Math.random().toString(36).slice(-5)+'-'+Math.random().toString(36).slice(-10);
    return id;
}

export function getTimeStamp(){
    const timestamp = new Date().toISOString();
    return timestamp;
}

export function getDate(){
    let currentDate = new Date();
    
    // Configura a hora para GMT-3
    currentDate.setHours(currentDate.getHours() - 3);
    
    // Converte para string ISO e formata
    const dateStr = currentDate.toISOString().slice(0, 19).replace('T', ' ');
    
    return dateStr;
}

export function getRandomHexColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }