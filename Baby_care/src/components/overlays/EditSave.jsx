import { useOverlay } from "../context/OverlayContext";
import FeatherIcon from "feather-icons-react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getEditMode } from "../../actions/modules";
function EditSave(props) {
    const {isEditSaveVisible, showEditSave, hideEditSave} = useOverlay();
    const [editmode, setEditmode] = useState(false);
    const EditMode = useSelector((state) => state.modules.editMode);
    const dispatch = useDispatch();
    if (!isEditSaveVisible) {
        return null;
    }

    const SubmitChange = props.submitFunction;

    const handleEdit = () => {
        setEditmode(!editmode);
        dispatch(getEditMode(!editmode));
        if(EditMode){
            SubmitChange();
        }
        console.log(EditMode);
    }

  return (
    <div>
      <div className=" absolute right-10 bottom-10 z-50">
        <button className="bg-white p-3 border-2 rounded-full shadow-xl" onClick={handleEdit}>
          {editmode ? (
            <FeatherIcon icon="save" color="blue" />
          ) : (
            <FeatherIcon icon="edit" color="blue" />
          )}
        </button>
      </div>
    </div>
  );
}

export default EditSave;
