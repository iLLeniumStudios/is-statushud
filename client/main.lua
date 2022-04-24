local function Show(title, values)
    SendNUIMessage({
        show = true,
        title = title,
        values = values,
    })
end

local function Hide()
    SendNUIMessage({
        show = false,
    })
end

exports("Show", Show)
exports("Hide", Hide)
