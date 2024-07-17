import React from "react";
import "./listPage.scss";
import { listData } from "../../lib/dummydata";
import Filter from "../../components/filter/Filter";
import Card from "../../components/cards/Card";
import Maps from "../../components/map/Maps";


const ListPage = () => {
  const data = listData;

  return (
    <div className="listPage">
      <div className="listcontainer">
        <div className="listingswrapper">
          <Filter />
          {data.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className="mapcontainer">
        <Maps items={data}/>
      </div>
    </div>
  );
};

export default ListPage;
