import PropTypes from 'prop-types'
import {Section, FilterInput, FilterLabel} from './Filter.styled'

export const Filter = ({ value, onChange }) => {
    return (
        <Section>
            <FilterLabel>
                Find contacts by name
                <FilterInput
                    type="text"
                    name="filter"
                    onChange={onChange}
                    value={value}
                />
            </FilterLabel>
                
        </Section>
    )
}

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}

