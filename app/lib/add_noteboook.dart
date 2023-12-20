import 'package:flutter/material.dart';
import 'package:notebook/notebooks.dart';

class AddNotebook extends StatelessWidget {
   AddNotebook({Key? key}) : super(key: key);

  final TextEditingController noteName = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Stack(
        children: [
          Center(
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                const Text(
                  "Add New Note",
                  style: TextStyle(
                    fontSize: 34,
                    color: Colors.red,
                    fontWeight: FontWeight.w700,
                  ),
                ),
                Padding(
                  padding: const EdgeInsets.all(15),
                  child: TextField(
                    controller: noteName,
                    decoration: const InputDecoration(hintText: "Note Name"),
                  ),
                ),
                ElevatedButton(
                  onPressed: () {
                    String note = noteName.text;
                    if (note.isNotEmpty) {
                      Navigator.pop(
                        context,
                        MaterialPageRoute(builder: (context) => Notebook()),
                      );
                    } else {
                      showDialog(
                        context: context,
                        builder: (context) => const AlertDialog(
                          title: Text("Error"),
                          content: Text("Enter Note Name"),
                        ),
                      );
                    }
                  },
                  child: const Text("Create"),
                ),
              ],
            ),
          ),
          Positioned(
            bottom: 16.0,
            right: 16.0,
            child: FloatingActionButton.small(
              onPressed: () {
                Navigator.pop(context);
              },
              child: const Icon(Icons.arrow_back),
            ),
          ),
        ],
      ),
    );
  }
}
