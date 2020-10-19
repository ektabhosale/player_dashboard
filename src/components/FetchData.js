import React, { useState, useEffect } from "react";
import Card from './Card'
import * as _ from "lodash";
const FetchData = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  
  useEffect(() => {
    const fetchData = () => {
      fetch("https://api.jsonbin.io/b/5d0c6e6a860ae0341876aac6/2")
        .then((resp) => {
          resp.json().then((result) => {
            console.log("result 55");
            setData(result)
            data.sort((a, b) => parseFloat(a.Value) - parseFloat(b.Value))
          })
        })
    };
    fetchData();
  }, []);

  const filteredPlayers = data.filter(player => {
    return player.PFName.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Player Dashboard</a>
        <ul className="navbar-nav mr-auto">
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2"
            onChange={(e) => setSearch(e.target.value)}
            type="search" placeholder="Search Player" aria-label="Search" />
        </form>
      </nav>
      <div className="my-5" >
      </div>

      <div className="container-fluid mb-5">
        <div className="row gy-4">
          {filteredPlayers.sort((a, b) => parseFloat(a.Value) > parseFloat(b.Value) ? 1 : -1).map(item => {
            return <Card
              PFName={item.PFName}
              Value={item.Value}
              SkillDesc={item.SkillDesc}
              id={item.Id}
              MDate={item.UpComingMatchesList[0].MDate}
              CCode={item.UpComingMatchesList[0].CCode}
              VsCCode={item.UpComingMatchesList[0].VsCCode}
            />
          })}
        </div>
      </div>
    </>
  );
}
export default FetchData;