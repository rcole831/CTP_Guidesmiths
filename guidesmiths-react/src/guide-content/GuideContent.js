import React from 'react';
import { Panel, Image} from 'react-bootstrap';


const GuideContent= (props) => {
    const guide = props.guide


    return (
        <Panel>
          <h2>{guide.title}</h2>
          <p>By {guide.Users.email}</p>
          <Image src={guide.cover_Image_Location}/>
            <div className="steps">
              <ul>
                {
                  guide.Steps.map((step, i) => {
                    return (
                      <div key={`g${guide.id}s${step.id}`}>
                        <li name={`step${step.id}`} value={`step${step.id}`}> </li>
                      </div>
                    )
                  })
                }
              </ul>
            </div>
        </Panel>
    )
}

export default GuideContent;