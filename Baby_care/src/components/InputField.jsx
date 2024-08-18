function InputField({ dataArr, inputChange}) {
console.log(dataArr);

  return (
    <>
      {dataArr.map(function (data, index) {
        return (
          <div className="py-3 space-y-3" key={index} >
            <label className="text-neutral-700 text-lg font-medium font-poppins" htmlFor="name">{data.heading}</label>
            <br />
              <input className="w-[275px] h-[50px] px-3 bg-neutral-100 border border-zinc-300"
              type= {data.type}
              id= {data.id}
              name= {data.name}
              placeholder={data.placeholder}
              onChange={inputChange}
            />
            <br />
          </div>
        );
      })}
    </>
  );
}

export default InputField;
