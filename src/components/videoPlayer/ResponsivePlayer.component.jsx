import { Component } from 'react';
import ReactPlayer from "react-player";
import './videoPlayer.styles.scss';
import TitleH1 from '../title_h1/titleH1.component';

class ResponsivePlayer extends Component {
  render () {
    return (
      <div className='videoGlobal'>
          <div className="videoSection-container">

            <div className="videoSectionInfo">
                <div className="v-paragraphs">
                    <div className="centerElement">
                        <TitleH1 title={this.props.headline.toUpperCase()}/>
                    </div>
                    <div className='underline'></div>
                    <div className='videoDetailsStyle'>
                      <div className="v-p-style">
                        <h3>Szolgált: </h3>
                        <p>{this.props.author} lp.</p>
                      </div>
                      <div className="v-p-style">
                        <h3>Dátum: </h3>
                        <p>{this.props.date}</p>
                      </div>
                      <div className="v-p-style">
                        <h3>Téma: </h3>
                        <p>{this.props.p1}</p>
                      </div>
                    </div>
                </div>

            <div className="sectionVideo">
                  <ReactPlayer
                      url={this.props.url}
                      width={this.props.width}
                      height={this.props.height}
                  />
            </div>
            </div>

        </div>
      </div>
    )
  }
}

export default ResponsivePlayer;