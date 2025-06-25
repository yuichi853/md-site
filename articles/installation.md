# Arch Linuxのインストール

https://www.youtube.com/watch?v=FxeriGuJKTM

上の動画に沿って、[Arch Wiki (日本語)](https://wiki.archlinux.jp/index.php/%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AB%E3%82%AC%E3%82%A4%E3%83%89)やその他複数のドキュメント（[オススメ！](https://zenn.dev/ytjvdcm/articles/0efb9112468de3) ）と見比べながら慎重に進めてください。
元のOS内データのバックアップ、パーティション構成、GPUドライバの対応、といった取り返しのつかない要素は特に注意してください。
今回のSway-wm環境に必要な要件は以下の通りなので、今回チュートリアルを進めていく方はこれらの項目は必ず設定してください。

- Mirror: Japan
- Disk configuration -> Partitioning
    - Disk configuration type: Use a best-effort default partition layout
    - File system: ext4
    - Create a separate partition for /home: Yes
- Profile
    - Type
        - Type: Desktop
        - Desktop environment: GNOME, Sway
        - Seat access: polkit
    - Greeter: GDM
- Audio: pipewire
- Kernel: linux & linux-lts
- Network configuration: Use NetworkManager
- Time zone: Japan


