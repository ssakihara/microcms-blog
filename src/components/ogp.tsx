import React from 'react'

interface Props {
  title: string
}

const App: React.FC<Props> = (props) => {
  const css = `
  @font-face {
    font-family: 'M PLUS Rounded 1c';
    font-weight: bold;
    src: url(data:font/ttf;charset=utf-8;base64) format('truetype');
  }
  html,
  body {
    margin: 0;
    padding: 0;
  }
  .wrapper {
    width: 1200px;
    height: 630px;
    display: flex;
    position: relative;
    align-items: center;
    font-family: 'M PLUS Rounded 1c';
    font-weight: bold;
    justify-content: center;
  }
  .title {
    font-size: 50px;
    padding-left: 80px;
    padding-right: 80px;
  }
  .author {
    right: 0;
    bottom: 0;
    margin: 50px;
    position: absolute;
    font-size: 40px;
    font-weight: 700;
  }
  `
  return (
    <html>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <body>
        <div className="wrapper">
          <div className="title">{props.title}</div>
          <div className="author">@ssakihara0524</div>
        </div>
      </body>
    </html>
  )
}
export default App
