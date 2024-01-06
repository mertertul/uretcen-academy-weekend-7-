import React from "react";

export default function baskabolum({ data, remove_item, edit_item }) {
    return (
        <>
            <ul className="list-group">
                {data.map((item) => (
                    <li className="list-group-item d-flex justify-content-between align-items-start p-3" key={item.uuid}>
                        {                  }
                    </li>
                ))}
            </ul>
        </>
    );
}
