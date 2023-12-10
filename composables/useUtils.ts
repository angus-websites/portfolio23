
export function useUtils()
{
    const checkBlankString = (value: string, defaultVal: string): string => {
        // Check if value is blank or null
        if (!value || value === '') {
            return defaultVal;
        }
        // Otherwise return value
        return value;
    }

    return{
        checkBlankString,
    }
}