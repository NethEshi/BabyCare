import React, {useState} from 'react';
function PageNumber(props) {

    const[PageNum, setPageNum] = useState(2);
    const[pageNumPlusOne, setPageNumPlusOne] = useState(3);
    const[pageNumMinusOne, setPageNumMinusOne] = useState(1);
  return (
    <div className="flex">
        <div className="px-3">
            <p className=' hover:scale-110'>{"< Previouse"}</p>
        </div>
        <div className="">
            <div className="flex space-x-3">
                <p className=' hover:scale-110'>{pageNumMinusOne}</p>
                <p className=' border-NavyBlue border-y-2 hover:scale-110'>{PageNum}</p>
                <p className=' hover:scale-110'>{`${pageNumPlusOne} ...`}</p>
            </div>
        </div>
        <div className="px-3">
            <p className=' hover:scale-110'>{"Next >"}</p>
        </div>
    </div>
  );
}

export default PageNumber;