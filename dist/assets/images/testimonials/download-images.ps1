# Download testimonial images from Unsplash
$images = @{
    "sarah.jpg" = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=256&h=256&fit=crop"  # Professional woman in red
    "david.jpg" = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=256&h=256&fit=crop"   # Software engineer look
    "emily.jpg" = "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=256&h=256&fit=crop"   # HR professional woman
}

foreach ($image in $images.GetEnumerator()) {
    $outputPath = Join-Path $PSScriptRoot $image.Key
    Invoke-WebRequest -Uri $image.Value -OutFile $outputPath
    Write-Host "Downloaded $($image.Key)"
} 