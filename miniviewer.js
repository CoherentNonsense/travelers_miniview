
function miniview()
{
    const size = 8;
    const link = document.getElementById('favicon');
    const canvas = document.createElement('canvas');
    canvas.height = size;
    canvas.width = size;
    const context = canvas.getContext('2d');



    setInterval(() => {
        for (let x = -size * 2; x < size * 2; x += 2)
        {
            for (let y = -size * 2; y < size * 2; y += 2)
            {
                let color = '#FF0000';
                switch (WORLD.deriveTile(YOU.x + x, YOU.y + y))
                {
                    case WORLD.TILES.sand:
                    case WORLD.TILES.island:
                        color = '#bb9900';
                        break;
                    case WORLD.TILES.mountain:
                        color = '#444444';
                        break;
                    case WORLD.TILES.swamp:
                        color = '#00FF00';
                        break;
                    case WORLD.TILES.house:
                        color = '#FF0000';
                        break;
                    case WORLD.TILES.city:
                        color = '#FF7700';
                        break;
                    case WORLD.TILES.grass:
                        color = '#44FF00';
                        break;
                    case WORLD.TILES.tree:
                        color = '#775500';
                        break;
                    case WORLD.TILES.forest:
                        color = '#558800';
                        break;
                    case WORLD.TILES.water:
                        color = '#0000ff';
                        break;
                    case WORLD.TILES.worldedge:
                        color = '#000000';
                        break;
                    default:
                }
                
                context.fillStyle = color;
                context.fillRect(x/2, y/2, 1, 1);            
                link.href = canvas.toDataURL('image/png');
                document.body.appendChild(link);
            }
        }
    }, 2000);
    
}


miniview();