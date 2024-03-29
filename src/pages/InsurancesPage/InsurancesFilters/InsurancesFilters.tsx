import "./InsurancesFilters.sass"
import DropdownMenu from "../../../components/DropdownMenu/DropdownMenu";
import {ADMIN_STATUSES, USER_STATUSES, variables} from "../../../utils/consts";
import {useAuth} from "../../../hooks/users/useAuth";
import {useInsurances} from "../../../hooks/insurances/useInsurances.ts";
import CustomDatePicker from "../../../components/CustomDatePicker/CustomDatePicker";
import CustomButton from "../../../components/CustomButton/CustomButton";
import SearchBar from "../../../components/SearchBar/SearchBar";

const InsurancesFilters = ({refetch}) => {

    const {is_moderator} = useAuth()

    const {status, setStatus, date_start, setDateStart, date_end, setDateEnd, user, setUser} = useInsurances()

    const handleSubmit = (e) => {
        e.preventDefault()
        refetch()
    }

    return (
        <div className="filters-wrapper">

            <div className="top-container">

                <h3>Список страховок</h3>

            </div>

            <form className="bottom-container" onSubmit={handleSubmit}>

                <DropdownMenu
                    width={175}
                    options={is_moderator ? ADMIN_STATUSES : USER_STATUSES}
                    selectedOption={status}
                    setSelectedOption={(id) => {
                        setStatus(id)
                    }}
                />

                <CustomDatePicker placeholder="От" value={date_start} setValue={setDateStart}/>

                <CustomDatePicker placeholder="До" value={date_end} setValue={setDateEnd}/>

                {is_moderator && <SearchBar query={user} setQuery={setUser} placeholder="Поиск по пользователям..." onSubmit={handleSubmit} />}

                <CustomButton bg={variables.primary}>
                    Применить
                </CustomButton>

            </form>

        </div>
    )
}

export default InsurancesFilters