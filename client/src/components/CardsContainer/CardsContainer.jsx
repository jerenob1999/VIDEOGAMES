import Card from "../Card/Card"
import { useSelector } from "react-redux"

const CardContainer = () => {

    const videogames = useSelector(state => state.videogames)
    console.log(videogames)
    const games = [
        {
            "id": 3498,
            "name": "Grand Theft Auto V",
            "platforms": [
                {
                    "platform": {
                        "id": 187,
                        "name": "PlayStation 5",
                        "slug": "playstation5",
                        "image": null,
                        "year_end": null,
                        "year_start": 2020,
                        "games_count": 852,
                        "image_background": "https://media.rawg.io/media/games/c92/c9207a31f0eeb9904a840fc26eae6afb.jpg"
                    },
                    "released_at": "2013-09-17",
                    "requirements_en": null,
                    "requirements_ru": null
                },
                {
                    "platform": {
                        "id": 186,
                        "name": "Xbox Series S/X",
                        "slug": "xbox-series-x",
                        "image": null,
                        "year_end": null,
                        "year_start": 2020,
                        "games_count": 748,
                        "image_background": "https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg"
                    },
                    "released_at": "2013-09-17",
                    "requirements_en": null,
                    "requirements_ru": null
                },
                {
                    "platform": {
                        "id": 18,
                        "name": "PlayStation 4",
                        "slug": "playstation4",
                        "image": null,
                        "year_end": null,
                        "year_start": null,
                        "games_count": 6625,
                        "image_background": "https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg"
                    },
                    "released_at": "2013-09-17",
                    "requirements_en": null,
                    "requirements_ru": null
                },
                {
                    "platform": {
                        "id": 4,
                        "name": "PC",
                        "slug": "pc",
                        "image": null,
                        "year_end": null,
                        "year_start": null,
                        "games_count": 512074,
                        "image_background": "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg"
                    },
                    "released_at": "2013-09-17",
                    "requirements_en": {
                        "minimum": "Minimum:OS: Windows 10 64 Bit, Windows 8.1 64 Bit, Windows 8 64 Bit, Windows 7 64 Bit Service Pack 1, Windows Vista 64 Bit Service Pack 2* (*NVIDIA video card recommended if running Vista OS)Processor: Intel Core 2 Quad CPU Q6600 @ 2.40GHz (4 CPUs) / AMD Phenom 9850 Quad-Core Processor (4 CPUs) @ 2.5GHzMemory: 4 GB RAMGraphics: NVIDIA 9800 GT 1GB / AMD HD 4870 1GB (DX 10, 10.1, 11)Storage: 72 GB available spaceSound Card: 100% DirectX 10 compatibleAdditional Notes: Over time downloadable content and programming changes will change the system requirements for this game.  Please refer to your hardware manufacturer and www.rockstargames.com/support for current compatibility information. Some system components such as mobile chipsets, integrated, and AGP graphics cards may be incompatible. Unlisted specifications may not be supported by publisher.     Other requirements:  Installation and online play requires log-in to Rockstar Games Social Club (13+) network; internet connection required for activation, online play, and periodic entitlement verification; software installations required including Rockstar Games Social Club platform, DirectX , Chromium, and Microsoft Visual C++ 2008 sp1 Redistributable Package, and authentication software that recognizes certain hardware attributes for entitlement, digital rights management, system, and other support purposes.     SINGLE USE SERIAL CODE REGISTRATION VIA INTERNET REQUIRED; REGISTRATION IS LIMITED TO ONE ROCKSTAR GAMES SOCIAL CLUB ACCOUNT (13+) PER SERIAL CODE; ONLY ONE PC LOG-IN ALLOWED PER SOCIAL CLUB ACCOUNT AT ANY TIME; SERIAL CODE(S) ARE NON-TRANSFERABLE ONCE USED; SOCIAL CLUB ACCOUNTS ARE NON-TRANSFERABLE.  Partner Requirements:  Please check the terms of service of this site before purchasing this software.",
                        "recommended": "Recommended:OS: Windows 10 64 Bit, Windows 8.1 64 Bit, Windows 8 64 Bit, Windows 7 64 Bit Service Pack 1Processor: Intel Core i5 3470 @ 3.2GHz (4 CPUs) / AMD X8 FX-8350 @ 4GHz (8 CPUs)Memory: 8 GB RAMGraphics: NVIDIA GTX 660 2GB / AMD HD 7870 2GBStorage: 72 GB available spaceSound Card: 100% DirectX 10 compatibleAdditional Notes:"
                    },
                    "requirements_ru": null
                },
                {
                    "platform": {
                        "id": 16,
                        "name": "PlayStation 3",
                        "slug": "playstation3",
                        "image": null,
                        "year_end": null,
                        "year_start": null,
                        "games_count": 3193,
                        "image_background": "https://media.rawg.io/media/games/e2d/e2d3f396b16dded0f841c17c9799a882.jpg"
                    },
                    "released_at": "2013-09-17",
                    "requirements_en": null,
                    "requirements_ru": null
                },
                {
                    "platform": {
                        "id": 14,
                        "name": "Xbox 360",
                        "slug": "xbox360",
                        "image": null,
                        "year_end": null,
                        "year_start": null,
                        "games_count": 2777,
                        "image_background": "https://media.rawg.io/media/games/15c/15c95a4915f88a3e89c821526afe05fc.jpg"
                    },
                    "released_at": "2013-09-17",
                    "requirements_en": null,
                    "requirements_ru": null
                },
                {
                    "platform": {
                        "id": 1,
                        "name": "Xbox One",
                        "slug": "xbox-one",
                        "image": null,
                        "year_end": null,
                        "year_start": null,
                        "games_count": 5509,
                        "image_background": "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg"
                    },
                    "released_at": "2013-09-17",
                    "requirements_en": null,
                    "requirements_ru": null
                }
            ],
            "image": "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg",
            "rating": 4.47,
            "genre": [
                {
                    "id": 4,
                    "name": "Action"
                },
                {
                    "id": 3,
                    "name": "Adventure"
                }
            ]
        },
        {
            "id": 3328,
            "name": "The Witcher 3: Wild Hunt",
            "platforms": [
                {
                    "platform": {
                        "id": 186,
                        "name": "Xbox Series S/X",
                        "slug": "xbox-series-x",
                        "image": null,
                        "year_end": null,
                        "year_start": 2020,
                        "games_count": 745,
                        "image_background": "https://media.rawg.io/media/games/b34/b3419c2706f8f8dbe40d08e23642ad06.jpg"
                    },
                    "released_at": "2015-05-18",
                    "requirements_en": null,
                    "requirements_ru": null
                },
                {
                    "platform": {
                        "id": 18,
                        "name": "PlayStation 4",
                        "slug": "playstation4",
                        "image": null,
                        "year_end": null,
                        "year_start": null,
                        "games_count": 6620,
                        "image_background": "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg"
                    },
                    "released_at": "2015-05-18",
                    "requirements_en": null,
                    "requirements_ru": null
                },
                {
                    "platform": {
                        "id": 7,
                        "name": "Nintendo Switch",
                        "slug": "nintendo-switch",
                        "image": null,
                        "year_end": null,
                        "year_start": null,
                        "games_count": 5215,
                        "image_background": "https://media.rawg.io/media/games/9dd/9ddabb34840ea9227556670606cf8ea3.jpg"
                    },
                    "released_at": "2015-05-18",
                    "requirements_en": null,
                    "requirements_ru": null
                },
                {
                    "platform": {
                        "id": 4,
                        "name": "PC",
                        "slug": "pc",
                        "image": null,
                        "year_end": null,
                        "year_start": null,
                        "games_count": 511710,
                        "image_background": "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg"
                    },
                    "released_at": "2015-05-18",
                    "requirements_en": null,
                    "requirements_ru": null
                },
                {
                    "platform": {
                        "id": 1,
                        "name": "Xbox One",
                        "slug": "xbox-one",
                        "image": null,
                        "year_end": null,
                        "year_start": null,
                        "games_count": 5506,
                        "image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
                    },
                    "released_at": "2015-05-18",
                    "requirements_en": null,
                    "requirements_ru": null
                },
                {
                    "platform": {
                        "id": 187,
                        "name": "PlayStation 5",
                        "slug": "playstation5",
                        "image": null,
                        "year_end": null,
                        "year_start": 2020,
                        "games_count": 848,
                        "image_background": "https://media.rawg.io/media/games/e11/e11325e2f89151d31f612e38dee3b6a0.jpg"
                    },
                    "released_at": "2015-05-18",
                    "requirements_en": null,
                    "requirements_ru": null
                }
            ],
            "image": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
            "rating": 4.66,
            "genre": [
                {
                    "id": 4,
                    "name": "Action"
                },
                {
                    "id": 3,
                    "name": "Adventure"
                },
                {
                    "id": 5,
                    "name": "RPG"
                }
            ]
        },
        {
            "id": 4200,
            "name": "Portal 2",
            "platforms": [
                {
                    "platform": {
                        "id": 14,
                        "name": "Xbox 360",
                        "slug": "xbox360",
                        "image": null,
                        "year_end": null,
                        "year_start": null,
                        "games_count": 2774,
                        "image_background": "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg"
                    },
                    "released_at": "2011-04-19",
                    "requirements_en": null,
                    "requirements_ru": null
                },
                {
                    "platform": {
                        "id": 6,
                        "name": "Linux",
                        "slug": "linux",
                        "image": null,
                        "year_end": null,
                        "year_start": null,
                        "games_count": 75015,
                        "image_background": "https://media.rawg.io/media/games/9dd/9ddabb34840ea9227556670606cf8ea3.jpg"
                    },
                    "released_at": "2011-04-19",
                    "requirements_en": null,
                    "requirements_ru": null
                },
                {
                    "platform": {
                        "id": 5,
                        "name": "macOS",
                        "slug": "macos",
                        "image": null,
                        "year_end": null,
                        "year_start": null,
                        "games_count": 101372,
                        "image_background": "https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg"
                    },
                    "released_at": null,
                    "requirements_en": null,
                    "requirements_ru": null
                },
                {
                    "platform": {
                        "id": 16,
                        "name": "PlayStation 3",
                        "slug": "playstation3",
                        "image": null,
                        "year_end": null,
                        "year_start": null,
                        "games_count": 3242,
                        "image_background": "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg"
                    },
                    "released_at": "2011-04-19",
                    "requirements_en": null,
                    "requirements_ru": null
                },
                {
                    "platform": {
                        "id": 4,
                        "name": "PC",
                        "slug": "pc",
                        "image": null,
                        "year_end": null,
                        "year_start": null,
                        "games_count": 511710,
                        "image_background": "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg"
                    },
                    "released_at": null,
                    "requirements_en": null,
                    "requirements_ru": {
                        "minimum": "Core 2 Duo/Athlon X2 2 ГГц,1 Гб памяти,GeForce 7600/Radeon X800,10 Гб на винчестере,интернет-соединение",
                        "recommended": "Core 2 Duo/Athlon X2 2.5 ГГц,2 Гб памяти,GeForce GTX 280/Radeon HD 2600,10 Гб на винчестере,интернет-соединение"
                    }
                },
                {
                    "platform": {
                        "id": 1,
                        "name": "Xbox One",
                        "slug": "xbox-one",
                        "image": null,
                        "year_end": null,
                        "year_start": null,
                        "games_count": 5506,
                        "image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
                    },
                    "released_at": "2011-04-18",
                    "requirements_en": null,
                    "requirements_ru": null
                }
            ],
            "image": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg",
            "rating": 4.62,
            "genre": [
                {
                    "id": 2,
                    "name": "Shooter"
                },
                {
                    "id": 7,
                    "name": "Puzzle"
                }
            ]
        }]
    return (
        <div>
            {videogames.map(game => {
                return <Card
                id={game.id}
                name={game.name}
                image={game.image}
                //revisar
                // genre={game.genre.length && game.genre.map(genre => {
                //     return `${genre.name}`
                // })} 
                key={game.id}
                released={game.released}
                rating={game.rating}
                />
            })}
        </div>
    )
}

export default CardContainer