// This is a controlled component, as all data is handled by its parent via props...
const CampoDeFiltrosDeAnuncio = (props) => {
  const handleAddTag = () => {
    if (props.currTag.name.trim().length > 0) {
      const newTag = { id: Date.now(), name: props.currTag.name.trim() };

      const updatedTags = props.form.tags;

      if (updatedTags.find(({ name }) => name === newTag.name)) {
        props.setCurrTag({ id: 0, name: "ERRO: Tag já cadastrada" });
        document.getElementById("currTag").classList.add("error");
        document.getElementById("addTagBtn").disabled = true;
      } else {
        updatedTags.push(newTag);
        props.setUpdatedForm(updatedTags);
        props.setCurrTag({ id: 0, name: "" });
        document.getElementById("currTag").focus();
      }
    }
  };

  const handleOnFocusCurrTag = () => {
    if (document.getElementById("currTag").classList.contains("error")) {
      document.getElementById("currTag").classList.remove("error");
      props.setCurrTag({
        id: 0,
        name: "",
      });
      document.getElementById("addTagBtn").disabled = false;
    }
  };

  const handleRemoveTags = (selectedOptions) => {
    if (selectedOptions.length > 0) {
      const selectedTags = [];

      for (let i = 0; i < selectedOptions.length; i++) {
        selectedTags.push(selectedOptions[i].label);
      }

      props.setUpdatedForm(
        props.form.tags.filter((tag) => !selectedTags.includes(tag.name))
      );
    }
  };

  return (
    <span className="form__inputs">
      <label htmlFor="currTag">Tags para filtrar anúncio</label>
      <span className="form-tag">
        <input
          id="currTag"
          type="text"
          className="form__input--title form-tag__input"
          value={props.currTag.name}
          onClick={handleOnFocusCurrTag}
          onChange={() =>
            props.setCurrTag({
              id: 0,
              name: document.querySelector("#currTag").value,
            })
          }
        />
        <button
          type="button"
          className="form__buttons form-tag--btn"
          onClick={handleAddTag}
          id="addTagBtn"
        >
          <i className="fa-solid fa-plus"></i>
        </button>
      </span>

      <span className="form-tag">
        <select
          id="tagsList"
          multiple
          className="form-tag__input form-tag__input--select"
        >
          {props.form.tags.map((tag) => (
            <option id="tagItem" key={tag.id}>
              {tag.name}
            </option>
          ))}
        </select>
        <button
          type="button"
          className="form__buttons form-tag--btn"
          onClick={() =>
            handleRemoveTags(
              document.getElementById("tagsList").selectedOptions
            )
          }
        >
          <i className="fa-solid fa-trash"></i>
        </button>
      </span>
    </span>
  );
};

export default CampoDeFiltrosDeAnuncio;
