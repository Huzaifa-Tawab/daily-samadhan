import request from "graphql-request";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PortalDetails() {
  const { id } = useParams();
  const [portalDetails, setPortalDetails] = useState({});
  useEffect(() => {
    fetchPortal();
  }, []);
  const fetchPortal = async () => {
    const response = await request(
      "https://ap-south-1.cdn.hygraph.com/content/clsiwd9vt329x01up6tkl7xj0/master",
      `
        query GetPortal($id: String!) {
          portal(where: { slug: $id }) {
            title
          }
        }
      `,
      { id: id }
    );
    console.log(response.portal);
    setPortalDetails(response.portal);
  };
  return (
    <div>
      {portalDetails && (
        <ul>
          {Object.keys(portalDetails).map((key) => (
            <li key={key}>{`${key}: ${portalDetails[key]}`}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default PortalDetails;
