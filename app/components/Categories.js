import React from 'react';
import PropTypes from 'prop-types';

class Categories extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        const selectedCategoryId = this.props.selectedCategoryId;

        const categoryComponents = this.props.categories.map((category) => {
            const active = selectedCategoryId === category.id;

            return (
                    <li key={category.id}
                        className={'' + (active ? 'active' : '')}>
                        <a href="#">{category.name}</a>
                    </li>
                );
        });

        return (
            <ul className = "categories">
                {categoryComponents}
            </ul>
        );
    }
}

Categories.propTypes = {
    categories: PropTypes.array.isRequired,
    selectedCategoryId: PropTypes.string.isRequired
};

export default Categories;
