function initMap(){
    const posicionUshuaia = {
        lat: -54.807627,
        lng: -68.301089
    }
    const posicionHornocal = {
        lat: -23.289329,
        lng: -65.160327
    }
    const posicionUyuni = {
        lat: -20.113243,
        lng: -67.563644
    }
    const map = new google.maps.Map(document.getElementById('map'),{
        zoom: 3,
        center: posicionUshuaia
    })
    const markerUsh = new google.maps.Marker({
        position: posicionUshuaia,
        map,
        title: 'Ushuaia'
    })
    const markerHcl = new google.maps.Marker({
        position: posicionHornocal,
        map,
        title: 'Hornocal'
    })
    const markerUyu = new google.maps.Marker({
        position: posicionUyuni,
        map,
        title: 'Uyuni'
    })

    // marker.setPosition({lat, lng})

}
