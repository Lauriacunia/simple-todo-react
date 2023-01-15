import React from "react";

function TodoSearch({searchValue, setSearchValue}) {

    //const [searchValue, setSearchValue] = React.useState("");

    // const onSearchValueChange = (event) => {
    //     console.log(event.target.value);
    // };
    return (
        <>
            <input
            placeholder="Cebolla"
            //onChange={onSearchValueChange}
            onChange={(event) => {
                setSearchValue(event.target.value);
            }}
            value={searchValue}
            />
            <p>{searchValue}</p>
        </>
    );
 }


export { TodoSearch }