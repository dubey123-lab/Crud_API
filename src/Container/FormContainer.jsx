import {connect} from "react-redux"
import Form from "../Component/Form"
import {deleteData, editValue, fetchUser, saveData, saveUpdate, sortData} from "../Redux/Actions/Action"

const mapStateToProps = (state) =>({
    userdata : state
})

const mapDispatchToProps = (dispatch) => ({
    saveData : (data) => dispatch(saveData(data)),
    fetchUser : () => dispatch(fetchUser()),
    sortData : () => dispatch(sortData()),
    deleteData : (id) => dispatch(deleteData(id)),
    editValue : (data) => dispatch(editValue(data)),
    saveUpdate : (data) => dispatch(saveUpdate(data))

});

export default connect(mapStateToProps , mapDispatchToProps)(Form)