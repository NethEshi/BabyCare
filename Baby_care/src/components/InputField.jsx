function InputField({ props }) {
  const dataArr = props;
  console.log(dataArr);

  return (
    <>
      {dataArr.map(function (data) {
        return (
          <div className="form-item" key={data.id}>
            <label htmlFor="name">{data.name}</label>
            <br />
            <input
              type="text"
              id="name"
              name="name"
              placeholder={data.placeholder}
            />
            <br />
          </div>
        );
      })}
    </>
  );
}

export default InputField;
