import React from "react";

interface SearchFieldProps {
    onSearch: (v: string) => void;
    isLoading: boolean;
}
const SearchField: React.FC<SearchFieldProps> = ({ onSearch, isLoading }) => {
    return (
        <div className="input-group position-relative w-50">
            <input
                className="form-control"
                placeholder="search for company names"
                onChange={(e) => onSearch(e.target.value)}
            />
            {isLoading && (
                <span
                    className="position-absolute  m-1"
                    style={{ right: 5, zIndex: 10000 }}
                >
                    <div
                        className="spinner-border spinner-border-small"
                        role="status"
                    />
                </span>
            )}
        </div>
    );
};

export default SearchField;
