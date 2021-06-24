import {connect} from "react-redux"
import Form from "../Component/Form"
import {saveData} from "../Redux/Actions/Action"

const mapStateToProps = (state) =>({
    userdata : state
})

const mapDispatchToProps = (dispatch) => ({
    saveData : (data) => dispatch(saveData(data))
});

export default connect(mapStateToProps , mapDispatchToProps)(Form)