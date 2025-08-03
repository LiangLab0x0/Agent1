import os

def load_zone(zone: str) -> str:
    zone_files = {
        "0": os.path.join("data", "0.md"),
        "1": os.path.join("data", "1.md"),
        "2": os.path.join("data", "2.md"),
        "3": os.path.join("data", "3.md"),
        "4": os.path.join("data", "4-Four.md"),
        "5": os.path.join("data", "5.md"),
        "6": os.path.join("data", "6.md"),
        "7": os.path.join("data", "7.md"),
        "8": os.path.join("data", "8.md"),
        "9": os.path.join("data", "9.md"),
    }
    path = zone_files.get(zone)
    if not path or not os.path.exists(path):
        raise ValueError(f"未知的区域: {zone}")
    with open(path, 'r', encoding='utf-8') as f:
        return f.read()

def main():
    print("潘德蒙尼姆数位图探索器")
    print("输入一个区域数字 (0-9) 查看其描述，输入 'q' 退出。\n")
    while True:
        choice = input("区域> ").strip().lower()
        if choice in ('q', 'quit', 'exit'):
            print("再见。")
            break
        try:
            content = load_zone(choice)
            print("\n" + content + "\n")
        except Exception as e:
            print(f"错误: {e}\n")

if __name__ == "__main__":
    main()
