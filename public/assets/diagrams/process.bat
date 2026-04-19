@echo off
setlocal

cd /d "%~dp0"

for /R %%F in (*.d2) do (
    
    echo Found: "%%F"
    
    pushd "%%~dpF"
    
    echo Running: d2 --dark-theme=200 --sketch "%%~nxF" "%%~nF.svg"
    
    d2 --dark-theme=200 --sketch "%%~nxF" "%%~nF.svg" || (
        echo.
        echo [ERROR] Failed to compile "%%~nxF"! Stopping script.
        popd
        pause
        exit /b 1
    )
    
    popd
)

echo.
echo Done
