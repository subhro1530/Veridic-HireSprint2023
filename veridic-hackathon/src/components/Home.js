import React, { Fragment } from "react";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import people from "./people";

function Home() {
  return (
    <Fragment>
      <div style={{ margin: "10rem" }}>
        <Table striped bordered hobver size="sm">
          <thread>
            <tr>
              <th>Name</th>
              <th>Age</th>
            </tr>
          </thread>
          <tbody>
            {people && people.length > 0
              ? people.map((item) => {
                  return (
                    <tr>
                      <td>{item.Name}</td>

                      <td>{item.Age}</td>
                      <td>
                        <Button onClick={()=>alert(item.id)}>Edit</Button>
                      </td>
                      <td>
                        <Button onClick={()=>alert(item.id)}>Delete</Button>
                      </td>
                    </tr>
                  );
                })
              : "No data Available"}
          </tbody>
        </Table>
      </div>
    </Fragment>
  );
}

export default Home;
