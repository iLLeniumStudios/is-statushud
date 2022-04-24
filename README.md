# is-statushud

NoPixel inspired Status Hud (Standalone / QBCore / ESX)

## Features

- Show status with a heading
- Update status
- Hide Status
- HTML support for Title and Values so you can customize the style of your text

## Preview

![Image](https://i.imgur.com/OwSzzyM.png)

Video: https://streamable.com/xshgah

## Usage

```lua
    -- Show Status Hud
    -- exports['is-statushud']:Show(title, values)

    exports['is-statushud']:Show("Area Dominance", {
        "Gang: Ballas",
        "Influence: %100",
    })

    -- Hide Status Hud
    exports['is-statushud']:Hide()
```

> Note: You can update the existing status by just passing in the new values and title
