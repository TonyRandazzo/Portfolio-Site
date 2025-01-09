import React from 'react'

function AboutMe() {
    const imageData = [
        { src: 'https://firebasestorage.googleapis.com/v0/b/fartclciker.appspot.com/o/Portfolio%2Fpngaaa.com-2436076.png?alt=media&token=c1a349f2-4b36-4e80-b72d-51ad85ce66e5', caption: 'HTML' },
        { src: 'https://firebasestorage.googleapis.com/v0/b/fartclciker.appspot.com/o/Portfolio%2Fcss-logo.png?alt=media&token=c5023976-b172-4e01-8b24-03643f5a4399', caption: 'CSS' },
        { src: 'https://img.icons8.com/ios7/600/FFFFFF/javascript.png', caption: 'JavaScript' },
        { src: 'https://img.icons8.com/ios11/512/FFFFFF/github.png', caption: 'Git/Github' },
        { src: 'https://img.icons8.com/ios_filled/512/FFFFFF/react-native.png', caption: 'React' },
        { src: 'https://img.icons8.com/ios_filled/512/FFFFFF/react-native.png', caption: 'React Native' },
        { src: 'https://nodejs.org/static/logos/nodejsStackedWhite.svg', caption: 'Node JS' },
        { src: 'https://firebasestorage.googleapis.com/v0/b/fartclciker.appspot.com/o/Portfolio%2Ftoppng.com-database-icon-white-271x381.png?alt=media&token=3b1f4dd1-66b2-458f-a2f7-c9593a96c8d1', caption: ' SQL/NoSQL' },
        { src: 'https://pngimg.com/d/php_PNG14.png', caption: 'PHP' },
        { src: 'https://firebasestorage.googleapis.com/v0/b/fartclciker.appspot.com/o/Portfolio%2Flaravel-1-logo-black-and-white.png?alt=media&token=fdfce0b8-eaf0-4442-8585-d8943009a97a', caption: 'Laravel' },
        { src: 'https://firebasestorage.googleapis.com/v0/b/fartclciker.appspot.com/o/Portfolio%2Fpython-512.png?alt=media&token=22513dd0-3f26-4db2-804c-4695372925c8', caption: 'Python' },
        { src: 'https://www.shareicon.net/data/2048x2048/2016/06/20/607106_jquery_4096x4096.png', caption: 'JQuery' },
        { src: 'https://angular.ossez.com/assets/images/logos/angular/angular_whiteTransparent.png', caption: 'Angular' },
        { src: 'https://wiki.archiveteam.org/images/2/26/Docker-Logo-White-RGB_Moby.png', caption: 'Docker' },
        { src: 'https://firebasestorage.googleapis.com/v0/b/fartclciker.appspot.com/o/Portfolio%2Fue-logotype-2023-vertical-white-1686x2048-bbfded26daa7.png?alt=media&token=ef183c94-2932-439c-a2f8-7cac47240ae9', caption: 'Unreal Engine' },
        { src: 'https://godotengine.org/assets/press/icon_monochrome_dark.png', caption: 'Godot Engine' }
    ];

    return (
        <section className="page second-page">
            <div className="container">
                <div className="rectangle-background"></div>
                <div className="rectangle-background2"></div>
                <div className="text-content">
                    <h1>About Me</h1>
                    <div className='about-me'>
                        {/* <div className="ball-line">
                            <div className="ball"></div>
                            <div className="ball"></div>
                            <div className="ball"></div>
                        </div>  */}
                        <div className="dates-line">
                            <div className='dates'>2024-ongoing</div>
                            <div className="line" style={{ backgroundColor: 'transparent', height: '130px' }}></div>
                            <div className='dates'>2023-2024</div>
                            <div className="line" style={{ backgroundColor: 'transparent', height: '130px' }}></div>
                            <div className='dates'>2023-ongoing</div>
                        </div>
                        <div className="content">
                            <div className='istruzione'>
                                <div className="ball"></div>

                                <h2>Bachelor's in Computer Science at "La Sapienza" University</h2>
                                <p className='titoletto'>First year student</p>
                                <p>I’m in the first year of university where I’m developing better and more in-depth knowledge about theoretical and practical skills in computer science. We use Python as the main programming language. With this degree I'll develop familiarity with scientific method of research, capability to understand and use the nedded mathematical principals and knowledge that give me the ability to approach diffferent information and communicative science and technologies.</p>
                            </div>
                            <div className='istruzione'>
                                <div className="ball"></div>
                                <h2>Infobasic - Full Stack Developer Course</h2>
                                <p className='titoletto'>Student</p>
                                <p>Studied the basics of web development using HTML, CSS, JavaScript and learned the implementation and usage of APIs, frameworks and libraries for the frontend (such as Tailwind and Bootstrap). We also studied PHP and MySQL for the backend and did a small project using React and Laravel. We also explored OOP, NoSQL databases, Git/GitHub, Node.js/Express, TypeScript, and Angular.</p>
                            </div>
                            <div className='istruzione'>
                                <div className="ball"></div>
                                <h2>Self-Taught</h2>
                                <p className='titoletto'>Student</p>
                                <p>I constantly study to improve myself and my skills as a developer. I became very passionate about coding, especially in game development, and started learning Unreal Engine, Godot, and other tools like Blender for 3D, Audacity for sound effects, and Gimp for 2D assets. I also taught myself JQuery for web development, CMS like WordPress, and web design tools like Figma, Photoshop, Illustrator, and Krita.</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="rectangle-background3">
                    <div className='experience'>
                        <div className='lavoro'>
                            <div className='titolo'>
                                <h2>TEAM COMPANY</h2>
                                <h3>2024</h3>
                            </div>
                            <div className='ruolo'><em>Full Stack Developer</em></div>
                        </div>
                        <div className='lavoro'>
                            <div className='titolo'>
                                <h2>BOOBLIS ENTERTAINMENT</h2>
                                <h3>2024-ongoing</h3>
                            </div>
                            <div className='ruolo'><em>Game Developer (React Native, NodeJS, SQL)</em></div>
                        </div>
                        <div className='lavoro'>
                            <div className='titolo'>
                                <h2>LUD</h2>
                                <h3>2024-ongoing</h3>
                            </div>
                            <div className='ruolo'><em>Game Developer (UE5)</em></div>
                        </div>
                    </div>
                    <div className="image-grid">
                        {imageData.map((item, index) => (
                            <div key={index} className="image-container">
                                <img
                                    src={item.src}
                                    alt={item.caption}
                                    className="grid-image"
                                />
                                <p className="image-caption">{item.caption}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="floating-container">
                <img
                    src="https://firebasestorage.googleapis.com/v0/b/fartclciker.appspot.com/o/Portfolio%2Fsfera%20strana1.png?alt=media&token=066a7b4f-fc1e-4dc6-8300-5895bbc90e2b"
                    alt="Floating element"
                    className="floating-image"
                />
            </div>

            <div className="diamond-border-container">
                <img
                    className="diamond-border"
                    src="https://firebasestorage.googleapis.com/v0/b/fartclciker.appspot.com/o/Portfolio%2FRectangle%20136%402x.png?alt=media&token=e9f76dd8-ae3f-43e6-8bbc-35c2982f4692"
                    alt="Immagine mancante"
                />
            </div>
        </section>
    )
}

export default AboutMe
