import React, { useRef } from "react";
import "./FilterFormBox.css";

function FilterFormBox({ setOpenModal, filterfunc}) {
  const modalRef = useRef();
  const country = useRef();
  const company = useRef();

  const closeModal = e => {
    if (modalRef.current === e.target) {
      // cleartimer();
      setOpenModal(false);
    }
  };
  const handleClickFilter=()=>{
    let filter ={
        company:"",
        country:""
    };
    if(company.current.value!==""){
        filter.company=company.current.value.toLocaleLowerCase();
    }
    if(country.current.value!==""){
        filter.country=country.current.value.toLocaleLowerCase();
    }
    filterfunc(filter);
    setOpenModal(false);
}


  return (
    <div onClick={closeModal} ref={modalRef} className="FilterFormBox-modalBackground">
      <div className="FilterFormBox-modalContainer" >
        <div className="FilterFormBox-filter-option-container">
            {/* <input  type={"checkbox"} className="FilterFormBox-checkbox"></input> */}
            <div>FilterBy Company</div>
            <input ref={company} type={"text"}></input>
        </div>
        <div className="FilterFormBox-filter-option-container">
            {/* <input type={"checkbox"} className="FilterFormBox-checkbox"></input> */}
            <div>FilterBy Country</div>
            <input ref={country} type={"text"}></input>
        </div>
        <div onClick={handleClickFilter} className="FilterFormBox-filter-button">Set Filter</div>
      </div>
     
    </div>
  );
}

export default FilterFormBox;
