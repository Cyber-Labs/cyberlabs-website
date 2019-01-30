import React, { Component } from "react";
import "./project.css";

class ProjectCard extends Component {
  
  renderArray(name) {
    return name.map(member => {
      return (
        <div className="by1 effect83">
          <i class="fa fa-user" aria-hidden="true" style={{ padding: "5px" }} />
          {member}
        </div>
      );
    });
  }
  renderProjects() {
    const {info} = this.props;
    
        return (
          <div className="box effect82">
            <div className="columns" style={{ height: "100%" }}>
              <div className="column1">
                <img
                  src={
                    info.images
                      ? `assets/img/project/${info.images}`
                      : "assets/img/project-placeholder.png"
                  }
                  style={{
                    borderRadius: "0",
                    margin: "0",
                    width: info.images ? "100%" : "50%"
                  }}
                  width="100%"
                  height="270px"
                  alt="Name of project"
                />
              </div>
              <div className="column-2">
                <div className="name">
                  <h1>{info.project}</h1>
                </div>
                <div className="about" />
                <hr width="50%" color="orange" />
                <div className="url">
                  {info.links.github && (
                    <div className="icon1">
                      <a
                        href={info.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div>
                          <i class="fa fa-github" aria-hidden="true" />
                        </div>{" "}
                      </a>
                    </div>
                  )}
                </div>
                <div className="Description">
                  <p>{info.description}</p>
                </div>
                <div className="madeby">{this.renderArray(info.name)}</div>
              </div>
            </div>
          </div>
        );
      }
  render() {
    return <div className="App2">{this.renderProjects()}</div>;
  }
}
export default ProjectCard;
