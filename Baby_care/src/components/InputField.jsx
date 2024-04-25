function InputField({ dataArr }) {
console.log(dataArr);

  return (
    <>
      {dataArr.map(function (data, index) {
        return (
          <div className="form-item " key={index} >
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
//denata ohoma krnn. mn psse blnnm rendering issue ek.
//css weda krn nane. ek khmd add krnne ? ko css? errors aw hinda ain kraapahu dann